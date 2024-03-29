import { Button, type ButtonProps, chakra } from "@chakra-ui/react";
import { useCallback, type MouseEventHandler } from "react";
import { BiPlus } from "react-icons/bi";
import { gql } from "graphql-request";
import { useMutation } from "urql";

import {
  type CreateCategoryMutation,
  type CreateCategoryMutationVariables,
} from "~/generated/graphql";

const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategory($data: categories_insert_input!) {
    created_category: insert_categories_one(object: $data) {
      id
    }
  }
`;

type Props = Omit<ButtonProps, "children"> & {
  onSuccess: ({ id }: { id: string }) => void;
  category: string;
};

const AddCategoryInlineButton = ({ onSuccess, category }: Props) => {
  const [mutationState, mutate] = useMutation<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >(CREATE_CATEGORY_MUTATION);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const { data } = await mutate({
        data: {
          name: category,
        },
      });

      if (data?.created_category) {
        onSuccess({ id: data.created_category.id });
      }
    },
    [category, mutate, onSuccess]
  );

  return (
    <Button
      px={1}
      fontWeight="normal"
      variant="ghost"
      isLoading={mutationState.fetching}
      onClick={handleClick}
      w="100%"
    >
      <BiPlus fontSize="1.5rem" /> Add category "
      <chakra.span fontWeight="bold" textOverflow="ellipsis" overflowX="hidden">
        {category}
      </chakra.span>
      "
    </Button>
  );
};

export default AddCategoryInlineButton;
