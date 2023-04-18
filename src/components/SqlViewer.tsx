import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import sql from "react-syntax-highlighter/dist/cjs/languages/hljs/sql";

interface SqlViewerProps {
	content: string;
}

const SqlViewer = (props: SqlViewerProps) => {

	SyntaxHighlighter.registerLanguage("javascript", sql);

	return (
		<SyntaxHighlighter
			className="text-slate-400 mt-2"
			language="sql"
			style={theme}
			customStyle={{
				backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity))",
			}}
		>
			{props.content}
		</SyntaxHighlighter>
	);
};

export default SqlViewer;
