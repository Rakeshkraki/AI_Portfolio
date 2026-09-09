"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export default class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Portfolio Error Boundary:", error);
        console.error("Component Stack:", errorInfo.componentStack);

        // Future integrations:
        // Sentry.captureException(error);
        // PostHog.captureException(error);
    }

    handleRetry = () => {
        this.setState({
            hasError: false,
            error: undefined,
        });
    };

    handleRefresh = () => {
        window.location.reload();
    };

    render() {
        if (!this.state.hasError) {
            return this.props.children;
        }

        return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816] p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card max-w-xl rounded-[32px] border border-red-500/20 p-8 text-center"
                >
                    {/* Error Icon */}

                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-4xl"
                    >
                        ⚠️
                    </motion.div>

                    {/* Title */}

                    <h1 className="mb-4 text-3xl font-bold text-white">
                        Something went wrong
                    </h1>

                    {/* Subtitle */}

                    <p className="mb-8 leading-7 text-slate-300">
                        An unexpected error occurred while rendering the portfolio.
                        Don't worry — you can retry without leaving the page.
                    </p>

                    {/* Error Message */}

                    {this.state.error && (
                        <div className="code-block mb-8 text-left text-sm text-red-300">
                            <p className="mb-2 font-semibold text-red-400">
                                Error Details
                            </p>

                            <pre className="overflow-x-auto whitespace-pre-wrap">
                {this.state.error.message}
              </pre>
                        </div>
                    )}

                    {/* Actions */}

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button
                            onClick={this.handleRetry}
                            className="btn-primary"
                        >
                            Retry
                        </button>

                        <button
                            onClick={this.handleRefresh}
                            className="btn-secondary"
                        >
                            Refresh Page
                        </button>
                    </div>

                    {/* Footer */}

                    <p className="mt-8 text-xs uppercase tracking-[0.25em] text-slate-500">
                        AI Backend Engineer Portfolio
                    </p>
                </motion.div>
            </div>
        );
    }
}
