import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  chakra,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { gql, useMutation, useQuery } from "urql";
import MainLayout from "~/components/main-layout";
import { FilledSecondaryButton } from "~/components/ui/buttons";
import {
  Alert_Operators_Enum,
  type DeleteAlertMutation,
  type DeleteAlertMutationVariables,
  type GetOwnAlertsQuery,
  type GetOwnAlertsQueryVariables,
} from "~/generated/graphql";

const GET_ALERTS_OVERVIEW_QUERY = gql`
  query GetOwnAlerts($user_id: uuid!) {
    product_alerts(where: { user_id: { _eq: $user_id } }) {
      id
      count_operand
      operator
      product_id
      product {
        name
        quantity
        imageUrl
        pending_orders: orders_items_aggregate(
          where: { order: { state: { _eq: AwaitingApproval } } }
        ) {
          aggregate {
            sum {
              count
            }
          }
        }
      }
    }
  }
`;

const DELETE_ALERT_MUTATION = gql`
  mutation DeleteAlert($id: uuid!) {
    deleted_alert: delete_product_alerts_by_pk(id: $id) {
      id
    }
  }
`;

const DeleteIcon = chakra(FiTrash);

const DELETE_ICON_LABEL = "Delete Alert";

const operatorSymbolMap = {
  [Alert_Operators_Enum.LessThan]: {
    symbol: "<",
    color: "#fd4d4f",
    bg: "#ffe6e7",
  },
  [Alert_Operators_Enum.Equal]: {
    symbol: "=",
    color: "#ded449",
    bg: "#f9fbe2",
  },
  [Alert_Operators_Enum.MoreThan]: {
    symbol: ">",
    color: "#43a054",
    bg: "#e9f5ec",
  },
};

const AlertsPage = () => {
  const { data } = useSession();
  const userId = data?.user?.id;

  const [selectedAlert, setSelectedAlert] = useState<
    GetOwnAlertsQuery["product_alerts"][0] | null
  >(null);

  const [alertsQuery, refetchAlerts] = useQuery<
    GetOwnAlertsQuery,
    GetOwnAlertsQueryVariables
  >({
    query: GET_ALERTS_OVERVIEW_QUERY,
    variables: {
      user_id: userId,
    },
  });

  const [deleteQuery, refetchDelete] = useMutation<
    DeleteAlertMutation,
    DeleteAlertMutationVariables
  >(DELETE_ALERT_MUTATION);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const onDelete = async () => {
    try {
      await refetchDelete({
        id: selectedAlert?.id ?? "",
      });
      onClose();
      refetchAlerts({
        requestPolicy: "network-only",
      });
    } catch (error) {
      toast({
        title: `Error deleting alert`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    const effect = async () => {
      if (deleteQuery.data) {
        toast({
          title: `Alert deleted`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    };
    effect();
  }, [deleteQuery.data, toast]);

  return (
    <MainLayout pageName="Alerts">
      <Flex direction="column" gap={2}>
        {alertsQuery.data?.product_alerts.map((alert) => {
          return (
            <Flex
              key={alert.id}
              alignItems="center"
              p={4}
              borderRadius="20"
              bg="white"
              justifyContent="space-between"
            >
              <Flex alignItems="center" gap={6} flex={8}>
                <Text
                  fontSize="1.2rem"
                  fontWeight="500"
                  bg={operatorSymbolMap[alert.operator].bg as string}
                  color={operatorSymbolMap[alert.operator].color as string}
                  py={2}
                  px={4}
                  borderRadius="15"
                >
                  {operatorSymbolMap[alert.operator].symbol}
                </Text>
                <Text fontSize="1.1rem" fontWeight="400">
                  Alert when{" "}
                  <span
                    style={{
                      background: "#ececec",
                      padding: "5px 13px",
                      borderRadius: "13px",
                    }}
                  >
                    {alert.product.name}
                  </span>{" "}
                  is{" "}
                  <span
                    style={{
                      background: "#ececec",
                      padding: "5px 13px",
                      borderRadius: "13px",
                    }}
                  >
                    {operatorSymbolMap[alert.operator].symbol}{" "}
                    {alert.count_operand}
                  </span>
                </Text>
              </Flex>
              <Flex
                flex={10}
                alignItems="center"
                gap="50px"
                justifyContent="flex-start"
              >
                <Box w="2px" py={6} backgroundColor="primary.background"></Box>
                <Image
                  src={alert.product.imageUrl}
                  alt="product image"
                  borderRadius="md"
                  shadow="md"
                  h="40px"
                  w="40px"
                  objectFit="contain"
                />
                <Text fontSize="1.1rem" fontWeight="400">
                  Available: {alert.product.quantity}
                </Text>
                <Text fontSize="1.1rem" fontWeight="400">
                  Pending:{" "}
                  {alert.product.pending_orders.aggregate?.sum?.count ?? 0}
                </Text>
                <Tooltip
                  label="Delete alert"
                  aria-label="Tooltip to delete alert"
                >
                  <IconButton
                    marginLeft="auto"
                    onClick={() => {
                      setSelectedAlert(alert);
                      onOpen();
                    }}
                    aria-label={DELETE_ICON_LABEL}
                    icon={
                      <DeleteIcon
                        fontSize="2rem"
                        color="#fd4d4f"
                        bg="#ffe6e7"
                        p="10px"
                        w="100%"
                        h="100%"
                        borderRadius={13}
                      />
                    }
                    variant="ghost"
                    size="md"
                    _hover={{ bg: "primary.background", borderRadius: 13 }}
                    transition="all 0.3s ease-in-out"
                  />
                </Tooltip>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Delete Alert</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Are you sure you want to delete this alert?
                    </ModalBody>

                    <ModalFooter>
                      <FilledSecondaryButton mr={3} onClick={onClose}>
                        Cancel
                      </FilledSecondaryButton>
                      <Button colorScheme="red" onClick={onDelete}>
                        Delete
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </MainLayout>
  );
};

export default AlertsPage;
