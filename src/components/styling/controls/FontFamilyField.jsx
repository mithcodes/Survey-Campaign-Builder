import SelectField from "./SelectField";

const FONT_OPTIONS = [
  "Inter",
  "Arial",
  "Georgia",
  "Verdana",
  "Roboto",
  "Poppins",
  "Times New Roman",
  "Courier New",
].map((font) => ({ value: font, label: font }));

const FontFamilyField = ({ value, onChange }) => {
  return (
    <SelectField
      label="Font Family"
      value={value}
      onChange={onChange}
      options={FONT_OPTIONS}
    />
  );
};

export default FontFamilyField;
