import { useSelector, useDispatch } from "react-redux";
import { walletAddressSelector } from "../store/wallet/selectors";
import { setAddress } from "../store/wallet/slice";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  const address = useSelector(walletAddressSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAddress(process.env.NEXT_PUBLIC_WALLET_ADDRESS || ""));
  }, [dispatch]);

  return (
    <div>
      <div>Home</div>
      <div>{address}</div>
    </div>
  );
}
