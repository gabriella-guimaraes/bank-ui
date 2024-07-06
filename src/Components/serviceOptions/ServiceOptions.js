import React from "react";
import { Grow } from "@mui/material";
import styles from "./ServiceOptions.module.css";

function ServiceOptions({ linkName, services, show }) {
    return(
        <>
            <Grow in={show} timeout={500}>
                <div className={styles.options}>
                    <p>{linkName}</p>

                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </Grow>
        </>
    )
}

export default ServiceOptions;