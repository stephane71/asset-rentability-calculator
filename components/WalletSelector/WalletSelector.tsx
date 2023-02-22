import React, { useState } from "react";
import { BLOCKCHAINS } from "../../utils/enums";
import { setWalletDetails } from "../../store/wallet/slice";
import { useDispatch } from "react-redux";

type WalletFormType = {
  address: string;
  network: number | null;
};

export function WalletSelector() {
  const dispatch = useDispatch();

  const [form, setFrom] = useState<WalletFormType>({
    address: "",
    network: null,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    const formatValue = name === "network" ? parseInt(value) : value;
    setFrom({ ...form, [name]: formatValue });
  }

  function handleClickFormValidate() {
    dispatch(setWalletDetails(form));
  }

  return (
    <div>
      <input
        type="text"
        value={form.address}
        name="address"
        onChange={handleChange}
      />
      <select
        name="network"
        id="network"
        value={String(form.network)}
        onChange={handleChange}
      >
        <option value="null">Select a network</option>
        {BLOCKCHAINS.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleClickFormValidate}>
        Validate
      </button>
    </div>
  );
}
