import { useEffect } from "react";
import { useMemo } from "react";
import { Dispatch, useCallback } from "react";
import { FunctionComponent, useState, SetStateAction } from "react";

interface CheckboxProps {
  label: string;
  selected?: boolean;
  onChange?: Dispatch<SetStateAction<boolean>>;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  label,
  selected,
  onChange,
}) => {
  const [useCheckboxState, setCheckboxState] = useState(selected || false);

  const onClicked = useCallback(() => {
    setCheckboxState((prev) => !prev);
  }, []);

  useEffect(() => {
    if (onChange) onChange(useCheckboxState);
  }, [useCheckboxState]);

  const labelComputed = useMemo(() => label, [label]);

  return (
    <div className="inline-flex gap-1 items-center pointer-events-nones select-none">
      <span onClick={onClicked} className="cursor-pointer">
        [ {useCheckboxState ? "X" : <>&nbsp;</>} ]
      </span>
      {labelComputed}
    </div>
  );
};

export default Checkbox;
