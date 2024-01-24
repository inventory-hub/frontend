import { gql } from "graphql-request";
import { type ChangeEventHandler, useMemo, useState, useCallback } from "react";
import { useQuery } from "urql";

import AutoComplete from "~/components/ui/AutoComplete";
import { throttle } from "~/utilities/rate-limiting";
import {
  type SearchCategoriesWithIdsQuery,
  type SearchCategoriesWithIdsQueryVariables,
} from "~/generated/graphql";
import AddCategoryInlineButton from "./AddCategoryInlineButton";
import { Center, Spinner } from "@chakra-ui/react";

const SEARCH_CATEGORIES_WITH_IDS = gql`
  query SearchCategoriesWithIds($search: String!) {
    categories(where: { name: { _ilike: $search } }) {
      id
      name
    }
    same_name_categories: categories(where: { name: { _eq: $search } }) {
      id
      name
    }
    categories_aggregate(where: { name: { _ilike: $search } }) {
      aggregate {
        count
      }
    }
  }
`;

type Props = {
  onChange: (id: string) => void;
  defaultValue?: string;
};

const CategoriesAutoComplete = ({ onChange, defaultValue }: Props) => {
  const [search, setSearch] = useState("");
  const [throttledSearch, _setThrottledSearch] = useState("");
  const setThrottledSearch = useMemo(
    () => throttle(_setThrottledSearch, 500),
    []
  );

  const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target.value;
      setSearch(value);
      setThrottledSearch(value);
    },
    [setThrottledSearch]
  );

  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );

  const [{ data: categoriesData, fetching }, refetchCategories] = useQuery<
    SearchCategoriesWithIdsQuery,
    SearchCategoriesWithIdsQueryVariables
  >({
    query: SEARCH_CATEGORIES_WITH_IDS,
    variables: {
      search: `%${throttledSearch}%`,
    },
  });

  const isExactMatch = !!categoriesData?.same_name_categories?.length;

  const extraElement = useMemo(
    () =>
      fetching ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        !isExactMatch &&
        search !== "" && (
          <AddCategoryInlineButton
            onSuccess={({ id }) => {
              refetchCategories({
                requestPolicy: "network-only",
              });
              onChange(id);
            }}
            category={search}
          />
        )
      ),
    [isExactMatch, onChange, refetchCategories, search, fetching]
  );

  const totalOptions =
    categoriesData?.categories_aggregate?.aggregate?.count ?? 0;
  const options =
    categoriesData?.categories?.map(({ id, name }) => ({
      label: name,
      value: id,
    })) ?? [];

  return (
    <AutoComplete
      w={60}
      options={options}
      onChange={handleChange}
      onInputChange={onInputChange}
      defaultValue={defaultValue}
      totalOptions={totalOptions}
      isServerFiltered
      placeholder="Select Category"
      extraElement={extraElement}
    />
  );
};

export default CategoriesAutoComplete;
