import { Company } from '../model';

interface CompanyCardProps {
    company: Company;
    className?: string;
}

export const CompanyCard = ({ company, className = "" }: CompanyCardProps) => {
    return (
        <li
            className={`group bg-transparent rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-gray-300 ${className}`}
        >
            <div className={`relative w-full aspect-[5/3] overflow-hidden bg-gradient-to-br border`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                            {company.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {company.name}
                    </h2>
                    <p className="text-blue-600 font-medium text-sm">
                        {company.role}
                    </p>
                </div>
            </div>
        </li>
    );
};
