import {
  Alert,
  AlertDescription,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { type FormEventHandler, useCallback, useState, useEffect } from "react";
import {
  useForm,
  type FieldErrors,
  type UseFormRegister,
} from "react-hook-form";
import { gql, useMutation, type UseQueryExecute } from "urql";
import { z } from "zod";
import {
  OutlinePrimaryButton,
  OutlineSecondaryButton,
} from "~/components/ui/buttons";
import { PrimaryOutlineInput } from "~/components/ui/inputs";
import {
  Alert_Operators_Enum,
  type CreateAlertMutation,
  type CreateAlertMutationVariables,
} from "~/generated/graphql";

type Props = {
  refetch: UseQueryExecute;
  productId: string;
};

const operatorsSymbols = {
  [Alert_Operators_Enum.Equal]: "=",
  [Alert_Operators_Enum.MoreThan]: ">",
  [Alert_Operators_Enum.LessThan]: "<",
};

const CREATE_ALERT_MUTATION = gql`
  mutation CreateAlert($data: product_alerts_insert_input!) {
    created_alert: insert_product_alerts_one(object: $data) {
      id
    }
  }
`;

const createAlertSchema = z.object({
  count_operand: z.coerce
    .number()
    .min(0, "Must be positive")
    .int("Must be a whole number"),
});

type CreateAlertForm = z.infer<typeof createAlertSchema>;

const CreateAlertForm = ({ refetch, productId }: Props) => {
  const { data } = useSession();
  const userId = data?.user?.id;

  const [operator, setOperator] = useState<Alert_Operators_Enum>(
    Alert_Operators_Enum.LessThan
  );
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isValid },
  } = useForm<CreateAlertForm>({ resolver: zodResolver(createAlertSchema) });

  const [createState, createMutation] = useMutation<
    CreateAlertMutation,
    CreateAlertMutationVariables
  >(CREATE_ALERT_MUTATION);

  const toast = useToast();

  useEffect(() => {
    const effect = async () => {
      if (createState.data) {
        refetch({
          requestPolicy: "network-only",
        });
        toast({
          title: `Alert created`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    };
    effect();
  }, [createState.data, getValues, toast, refetch]);

  useEffect(() => {
    if (createState.error) {
      setError("root", {
        message: createState.error.message,
      });
    }
  }, [createState.error, setError]);

  const onSubmit = useCallback(
    (data: CreateAlertForm) => {
      const mutationData = {
        data: {
          count_operand: data.count_operand,
          operator,
          product_id: productId,
          user_id: userId,
        },
      };
      createMutation(mutationData);
    },
    [createMutation, operator, productId, userId]
  );

  return (
    <Flex gap={1}>
      <Select
        w="20%"
        onChange={(e) => {
          const selectedOperator = e.target.value as Alert_Operators_Enum;
          setOperator(selectedOperator);
        }}
      >
        <option value={Alert_Operators_Enum.LessThan}>{"<"}</option>
        <option value={Alert_Operators_Enum.Equal}>=</option>
        <option value={Alert_Operators_Enum.MoreThan}>{">"}</option>
      </Select>
      <form>
        {errors.root?.message && (
          <Alert
            status="error"
            mb={6}
            rounded="sm"
            border="1px solid"
            borderColor="red.200"
          >
            <AlertDescription>{errors.root?.message}</AlertDescription>
          </Alert>
        )}
        <Flex gap={1}>
          <FormControl isInvalid={!!errors.count_operand} w="30%">
            <NumberInput defaultValue={1} min={0}>
              <NumberInputField {...register("count_operand")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <OutlineSecondaryButton
            type="submit"
            disabled={!isValid}
            isLoading={createState.fetching}
            onClick={handleSubmit(onSubmit)}
            w="30%"
          >
            Create
          </OutlineSecondaryButton>
        </Flex>
      </form>
    </Flex>
  );
};

export default CreateAlertForm;
