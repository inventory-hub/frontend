import {
  Editable,
  EditableInput,
  EditablePreview,
  type EditableProps,
} from "@chakra-ui/react";

type Props = EditableProps & {
  editable: boolean;
};

const EditableDetail = ({ editable, ...props }: Props) => {
  return (
    <Editable my="4" isPreviewFocusable={editable} {...props}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};

export default EditableDetail;
