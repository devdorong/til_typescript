interface LoadingState {
  type: "loading";
  data: string[];
}
interface ErrorState {
  type: "error";
  data: string[];
}

type FetchStatus = LoadingState | ErrorState;

// type StatusType = "loading" | "error"
type StatusType = FetchStatus["type"];
