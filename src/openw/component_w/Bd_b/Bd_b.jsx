'use client';

import './bd_b.css';

import React, { useState } from 'react';

import Realtime from '../../data/Realtime';
import DataDisplay from '../ui/DataDisplay/DataDisplay';
import Pagination from '../ui/Pagination/Pagination';

function Bd_b() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const pageCount = Math.ceil(Realtime.length / itemsPerPage);
  const displayData = Realtime.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div>
      <div className="Body_b">
        <div className="realtime_a_xd">
          <div className="header_realtime">
            <h1>Pantip Pick</h1>
            <span>กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip</span>
          </div>
          <div>
            <DataDisplay data={displayData} />
          </div>
          <div className="pagination_a">
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bd_b;
