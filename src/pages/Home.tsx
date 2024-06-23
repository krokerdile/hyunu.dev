import { useRef } from 'react';
import Resume from '../components/Resume';
import { useReactToPrint } from 'react-to-print';

export default function Home() {
  const printRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="w-full flex flex-col justify-center p-2">
      <div className="w-[800px] flex flex-col justify-left">
        <button
          onClick={handlePrint}
          className="mb-4 p-2 bg-blue-500 text-white max-w-[200px] h-15 rounded-md hover:bg-blue-600"
        >
          PDF로 다운로드
        </button>
        <div ref={printRef}>
          <Resume />
        </div>
      </div>
    </div>
  );
}
