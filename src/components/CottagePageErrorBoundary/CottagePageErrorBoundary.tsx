import React, { Component, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getDefaultCottage } from '../../utils/cottageDefaults';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

class CottagePageErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('CottagePageErrorBoundary caught an error:', error, errorInfo);
		
		// Log additional context for debugging
		console.error('Error occurred in cottage page rendering');
		console.error('Current URL:', window.location.pathname);
		console.error('Error details:', {
			message: error.message,
			stack: error.stack,
			componentStack: errorInfo.componentStack
		});
	}

	render() {
		if (this.state.hasError) {
			const defaultCottage = getDefaultCottage();
			
			// Navigate to default cottage when any cottage page error occurs
			return <Navigate to={`/cottage/${defaultCottage.code}`} replace />;
		}

		return this.props.children;
	}
}

export default CottagePageErrorBoundary;