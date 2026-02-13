import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectNavProps {
    prev: {
        title: string;
        link: string;
    };
    next: {
        title: string;
        link: string;
    };
}

const ProjectNavigation: React.FC<ProjectNavProps> = ({ prev, next }) => {
    return (
        <div className="border-t border-gray-100 dark:border-gray-800 mt-16 pt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
                <Link
                    to={prev.link}
                    className="group flex flex-col items-start gap-1 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors w-full sm:w-1/2"
                >
                    <span className="flex items-center text-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
                        Previous Project
                    </span>
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
                        {prev.title}
                    </span>
                </Link>

                <Link
                    to={next.link}
                    className="group flex flex-col items-end gap-1 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors w-full sm:w-1/2 text-right"
                >
                    <span className="flex items-center text-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                        Next Project
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
                        {next.title}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectNavigation;
