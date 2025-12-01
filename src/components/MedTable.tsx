import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Search } from "lucide-react";

type DataRow = {
  caseNumber: string;
  dateCreated: string;
  chiefComplaint: string;
  timeQueued: string;
  queueStatus: string;
  attendingDoctor: string;
};

type SortConfig = {
  key: keyof DataRow | null;
  direction: "asc" | "desc";
};

const MedTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const [data] = useState<DataRow[]>([
    {
      caseNumber: "10001",
      dateCreated: "22-JUL-2024 04:46 PM",
      chiefComplaint: "Headache",
      timeQueued: "10:00 AM",
      queueStatus: "In Queue",
      attendingDoctor: "Dr. John Doe",
    },
    {
      caseNumber: "10002",
      dateCreated: "22-JUL-2024 05:15 PM",
      chiefComplaint: "Fever",
      timeQueued: "10:30 AM",
      queueStatus: "Being Treated",
      attendingDoctor: "Dr. Jane Smith",
    },
    {
      caseNumber: "10003",
      dateCreated: "22-JUL-2024 06:00 PM",
      chiefComplaint: "Chest Pain",
      timeQueued: "11:00 AM",
      queueStatus: "Completed",
      attendingDoctor: "Dr. Mike Johnson",
    },
    {
      caseNumber: "10004",
      dateCreated: "23-JUL-2024 08:30 AM",
      chiefComplaint: "Abdominal Pain",
      timeQueued: "08:30 AM",
      queueStatus: "In Queue",
      attendingDoctor: "Dr. Sarah Lee",
    },
    {
      caseNumber: "10005",
      dateCreated: "23-JUL-2024 09:45 AM",
      chiefComplaint: "Back Pain",
      timeQueued: "09:00 AM",
      queueStatus: "In Queue",
      attendingDoctor: "Dr. John Doe",
    },
    {
      caseNumber: "10006",
      dateCreated: "23-JUL-2024 10:20 AM",
      chiefComplaint: "Cough",
      timeQueued: "10:15 AM",
      queueStatus: "Being Treated",
      attendingDoctor: "Dr. Emily Brown",
    },
  ]);

  const handleSort = (key: keyof DataRow) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedData = useMemo(() => {
    const filtered = data.filter((row) =>
      Object.values(row).some((val) =>
        val.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (sortConfig.key) {
      return [...filtered].sort((a, b) => {
        const aVal = a[sortConfig.key!];
        const bVal = b[sortConfig.key!];

        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, searchTerm, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredAndSortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredAndSortedData, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedData.length / rowsPerPage);

  const SortIcon = ({ columnKey }: { columnKey: keyof DataRow }) => {
    if (sortConfig.key !== columnKey) {
      return (
        <span className="opacity-30">
          <ChevronUp size={14} />
        </span>
      );
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp size={14} />
    ) : (
      <ChevronDown size={14} />
    );
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-2 max-w-md">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search all columns..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
          <thead className="bg-slate-100">
            <tr>
              {[
                { key: "caseNumber" as keyof DataRow, label: "Case #" },
                { key: "dateCreated" as keyof DataRow, label: "Date Created" },
                {
                  key: "chiefComplaint" as keyof DataRow,
                  label: "Chief Complaint",
                },
                { key: "timeQueued" as keyof DataRow, label: "Time Queued" },
                { key: "queueStatus" as keyof DataRow, label: "Queue Status" },
                {
                  key: "attendingDoctor" as keyof DataRow,
                  label: "Attending Doctor",
                },
              ].map(({ key, label }) => (
                <th
                  key={key}
                  onClick={() => handleSort(key)}
                  className="border border-slate-300 p-2 text-left cursor-pointer hover:bg-slate-200 select-none"
                >
                  <div className="flex items-center gap-2">
                    {label}
                    <SortIcon columnKey={key} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="border border-slate-300 p-2 text-left font-semibold">
                    {row.caseNumber}
                  </td>
                  <td className="border border-slate-300 p-2 text-left font-semibold">
                    {row.dateCreated}
                  </td>
                  <td className="border border-slate-300 p-2 text-left font-semibold">
                    {row.chiefComplaint}
                  </td>
                  <td className="border border-slate-300 p-2 text-left font-semibold">
                    {row.timeQueued}
                  </td>
                  <td className="border border-slate-300 p-2 text-left font-semibold">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        row.queueStatus === "In Queue"
                          ? "bg-yellow-100 text-yellow-800"
                          : row.queueStatus === "Being Treated"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {row.queueStatus}
                    </span>
                  </td>
                  <td className="border border-slate-300 p-2 text-left font-semibold">
                    {row.attendingDoctor}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="border border-slate-300 p-4 text-center text-gray-500"
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing{" "}
          {paginatedData.length > 0 ? (currentPage - 1) * rowsPerPage + 1 : 0}{" "}
          to {Math.min(currentPage * rowsPerPage, filteredAndSortedData.length)}{" "}
          of {filteredAndSortedData.length} entries
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-slate-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100"
          >
            Previous
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border border-slate-300 rounded ${
                  currentPage === page
                    ? "bg-amber-400 text-white"
                    : "hover:bg-slate-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-slate-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedTable;
