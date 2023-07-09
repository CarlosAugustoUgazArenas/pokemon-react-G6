import { getColorEtiqueta } from "../helpers/colors";

export const TypePk = ({ type }) => {
  return (
    <>
      <p
        key={type}
        className={`rounded-lg px-3 py-1 text-black`}
        style={{ background: getColorEtiqueta(type) }}
      >
        {type}
      </p>
    </>
  );
};
