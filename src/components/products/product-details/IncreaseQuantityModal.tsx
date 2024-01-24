import {
  Alert,
  AlertDescription,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { type FormEventHandler, useCallback } from "react";
import { type UseFormRegister, type FieldErrors } from "react-hook-form";
import { FilledSecondaryButton } from "~/components/ui/buttons";

type IncreaseQuantityModalProps = {
  isOpen: boolean;
  onClose: () => void;
  errors: FieldErrors<{ initial_count: number }>;
  register: UseFormRegister<{ initial_count: number }>;
  onSubmit: () => void;
  isValid: boolean;
  isLoading: boolean;
};

const IncreaseQuantityModal = ({
  isOpen,
  onClose,
  errors,
  register,
  onSubmit,
  isValid,
  isLoading,
  ...props
}: IncreaseQuantityModalProps) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add product</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
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
            <FormControl isInvalid={!!errors.initial_count}>
              <NumberInput defaultValue={1} min={1}>
                <NumberInputField {...register("initial_count")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <FilledSecondaryButton
              type="submit"
              disabled={!isValid}
              isLoading={isLoading}
            >
              Save
            </FilledSecondaryButton>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default IncreaseQuantityModal;
