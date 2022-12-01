import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoomForm from "../RoomForm";

const room = {
  number: "208",
  building: "HC",
  capacity: 10,
  type: {code: "pc", name: "PC Lab"},
  photos: [],
};

describe("RoomForm", () => {
  it("allows for a custom label to be set", () => {
    render(
      <RoomForm
        onSubmit={() => {
          true;
        }}
        values={room}
        label="Foo"
      />
    );
    screen.getByText("Foo");
  });

  it("allows a Room to be updated", async () => {
    const handleClick = jest.fn();
    render(
      <RoomForm onSubmit={handleClick} values={room} label="Update Room" />
    );
    const roomNumber = screen.getByPlaceholderText("Room Number");
    await userEvent.clear(roomNumber);
    await userEvent.type(roomNumber, "208");
    await userEvent.click(screen.getByText("Update Room"));
    expect(handleClick.call.length).toBe(1);
    expect(handleClick).toHaveBeenCalledWith({
      building: "HC",
      capacity: 10,
      number: "208",
      photos: undefined,
      type: {code: "pc", name: "PC Lab"},
    });
  });
});