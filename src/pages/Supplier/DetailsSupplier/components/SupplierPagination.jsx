import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function SupplierDetailsPagination() {

    return (
        <div className="supplierpagination">
            <div className="supplierpagination_wrapper">
                <h4 className="supplierpagination_text">Показано <span>1-10 </span>из <span>154</span> заказов</h4>
                <div className="supplierpagination_part">
                    <p className="supplierpagination_p">Строк на странице:</p>
                    <div className="supplierpagination_dropdown">
                        <h6 className="supplierpagination_dropdown_number">0</h6>
                        <KeyboardArrowDownIcon />
                    </div>
                    <Stack spacing={2}>
                        <Pagination
                            count={3}
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
    );
}