import { SnackbarOrigin } from "@material-ui/core";
import React from "react";
import { AlertState } from "../types/types";
export declare function SnackBarComponent(autoHideDuration?: number, options?: {
    initialAlert?: AlertState;
    handleCloseAlert?: (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => void;
}): {
    component: () => JSX.Element;
    alert: AlertState;
    setAlert: React.Dispatch<React.SetStateAction<AlertState>>;
    error: {
        open: boolean;
        autoHideDuration: number;
        severity: "success" | "info" | "warning" | "error" | undefined;
        origin: SnackbarOrigin;
    };
    success: {
        open: boolean;
        autoHideDuration: number;
        severity: "success" | "info" | "warning" | "error" | undefined;
        origin: SnackbarOrigin;
    };
};
