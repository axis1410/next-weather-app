interface ErrorMessageProps {
	error: string;
	isError: boolean;
}

const ErrorMessage = ({ error, isError }: ErrorMessageProps) => {
	return (
		<div className={`text-5xl text-center ${isError ? 'text-gray-100' : 'text-white'}`}>
			{error}
		</div>
	);
};

export default ErrorMessage;
