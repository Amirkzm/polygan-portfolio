import theme from "../../utils/theme";

const Folder = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke={theme.palette.primary.main}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  );
};

export default Folder;
