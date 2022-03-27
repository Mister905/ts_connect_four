interface I_props {
  value: number | null;
  column_index: number;
}

function Cell({ value, column_index }: I_props) {

  console.log(value);
  console.log(column_index);
  
  let color = "white_circle";

  if (value === 1) {
    color = "red_circle";
  } else if (value === 2) {
    color = "yellow_circle";
  }

  return (
    <td>
      <div
        className="game_cell"
        // onClick={() => {
        //   play(column_index);
        // }}
      >
        <div className={color}></div>
      </div>
    </td>
  );
}

export default Cell;
