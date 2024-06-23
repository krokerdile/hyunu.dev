const A4Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[210mm] min-h-[297mm] mx-auto p-10 bg-white shadow-md box-border text-left flex flex-col justify-start text-sm">
      {children}
    </div>
  );
};

export default A4Layout;
