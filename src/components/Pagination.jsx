import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react'

export default function GlobalPagination() {
    return (
        <div className="pagination">
            <div className="pagination_wrapper">
                <h4 className="pagination_text">Показано <span>1-8 </span>из <span>50</span> сотрудников</h4>
                <div className="pagination_part">
                    <p className="pagination_p">Строк на странице:</p>
                    <div className="pagination_dropdown">
                        <h6 className="pagination_dropdown_number">10</h6>
                        <KeyboardArrowDownIcon />
                    </div>
                    <Stack spacing={2}>
                        <Pagination
                            count={5}
                            variant="outlined"
                            shape="rounded"
                            sx={{
                                "& .MuiPaginationItem-root.Mui-selected": {
                                    backgroundColor: "#22C3AF",
                                    color: "#fff",
                                    borderColor: "#22C3AF",
                                },
                                "& .MuiPaginationItem-root.Mui-selected:hover": {
                                    backgroundColor: "#1aa899",
                                },
                            }}
                        />
                    </Stack>
                </div>
            </div>
        </div>
    )
}
