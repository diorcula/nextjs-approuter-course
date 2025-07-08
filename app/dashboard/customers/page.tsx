import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page() {
  const allCustomers = await fetchFilteredCustomers("");

  return (
    <main>
      <div>
        <Suspense>
          <CustomersTable customers={allCustomers} />
        </Suspense>
      </div>
    </main>
  );
}
