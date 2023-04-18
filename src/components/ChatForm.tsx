import { useEffect, useRef } from "react";

interface ChatFormProps {

	onPrompt: (prompt: string) => void;

}

const ChatForm = (props: ChatFormProps) => {

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [inputRef]);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (inputRef.current) {
			e.preventDefault();				
			const value = inputRef.current.value;
			inputRef.current.value = "";
			props.onPrompt(value);
		}
	};

	return (
		<form onSubmit={handleFormSubmit} className="flex flex-col relative">
			<input
				type="text"
				name="query"
				id="query"
				ref={inputRef}
				autoFocus={true}
				autoComplete="off"
				placeholder="What do you want from the database?"
				className="bg-slate-700 rounded-2xl resize-none border-0 shadow-md h-16 pr-16 placeholder-slate-400"
			></input>
			<button className="absolute right-1 top-1/2 -translate-y-1/2 p-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
					/>
				</svg>
			</button>
		</form>
	);
};

export default ChatForm;
