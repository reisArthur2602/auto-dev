export type SearchBarProps = {
  onChange: (value: React.SetStateAction<string>) => void;
  value: string;
  onClick: () => Promise<void>;
};
