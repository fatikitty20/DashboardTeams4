import { useDispatch, useSelector } from "react-redux";

import type { DespachoApp, EstadoRaiz } from "@/store";

export const useDespachoApp = useDispatch.withTypes<DespachoApp>();
export const useSelectorApp = useSelector.withTypes<EstadoRaiz>();
