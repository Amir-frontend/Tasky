import React from 'react'
import Touls from '../components/Touls'
import Report_1 from '../components/Report_1';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import FolderIcon from '@mui/icons-material/Folder';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Report_2 from '../components/Report_2';
import Report_3 from '../components/Report_3';
import Report_4 from '../components/Report_4';
import '../index.css'
export default function HomeReports() {
  return (
    <div className={`min-h-screen no-scrollbar sm:px-8 bg-background-DEFAULT dark:bg-background-dark transition-colors `}>
      {/* البلوكات التوب */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        <Touls icon={HistorySharpIcon} name1="Total Hours" name2="35" fonts2="text-4xl font-bold"/>
        <Touls icon={FolderIcon} name1="Total Projects" name2="12/3" fonts2="text-4xl font-bold"/>
        <Touls icon={AssignmentTurnedInIcon} name1="Completed / Not completed" name2="15/7" fonts2="text-4xl font-bold"/>
      </div>

      {/* الشارتات */}
      <div className="no-scrollbar w-full grid grid-cols-1 md:grid-cols-2 gap-7 mt-4 px-3 mb-20">
        <div className="min-h-[320px]"><Report_1/></div>
        <div className="min-h-[320px]"><Report_2/></div>

        <div className="w-full md:col-span-2 grid grid-cols-1 md:grid-cols-[35%,63%] gap-5">
          <div className="min-h-[320px]"><Report_3/></div>
          <div className="min-h-[320px]"><Report_4/></div>
        </div>
      </div>
    </div>
  )
}
