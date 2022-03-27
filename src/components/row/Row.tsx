import Cell from "../cell/Cell";

interface I_props {
  row: number[] | null[];
}

function Row({ row }: I_props) {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell key={i} value={cell} column_index={i} />
      ))}
    </tr>
  );
}

export default Row;
