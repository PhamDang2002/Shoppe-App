import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// Supports weights 100-900
import "@fontsource-variable/public-sans";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "@redux/slices/snackbarSlice";
import Loading from "@components/Loading";

import "@fontsource-variable/inter";
const RootLayout = () => {
  const { open, message, type } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();
  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert severity={type} variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default RootLayout;
