import React from 'react';

interface ErrorMessageProps {
	error: string;
	isError: boolean;
}

const ErrorMessage = ({ error, isError }: ErrorMessageProps) => {
	return (
		<div className={`text-5xl text-center ${isError ? 'text-red-500' : 'text-white'}`}>
			{error}
		</div>
	);
};

export default ErrorMessage;
