'use client';

import { CompanyCard } from './ui';
import { defaultCompanies, CompaniesGridProps  } from './model';

export const CompaniesGrid = ({
    companies = defaultCompanies,
    className = ""
}: CompaniesGridProps) => {
    return (
        <ul className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
            {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
            ))}
        </ul>
    );
};