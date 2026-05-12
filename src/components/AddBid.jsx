import { useState, useTransition } from "react";

const AddBid = ({house, addBid}) => {
    const [isPending, startTransition] = useTransition();

    const emptyBid = {
        houseId: house.id,
        bidder: "",
        amount: 0
    }

    const [newBid, setNewBid] = useState(emptyBid);

    const bidSubmitAction = () => {
        startTransition(async () => {
            await addBid(newBid);
        });
        setNewBid(emptyBid);
    }

    return (
        <form action={bidSubmitAction} className="row row-cols-lg-auto">
        <div className="col-5">
          <input
            id="bidder"
            className="h-100 form-control"
            type="text"
            name="bidder"
            placeholder="Bidder"
          ></input>
        </div>
        <div className="col-5">
          <input
            id="amount"
            className="h-100 form-control"
            type="number"
            name="amount"
            placeholder="Amount"
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-primary"
            type="submit" disabled={isPending}>
            Add
          </button>
        </div>
      </form>
    )
};

export default AddBid;