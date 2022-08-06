import {Box} from "./Box"
import "./TransactionHistory.module.css"


export const TransactionHistory =({items:props})=>{
    return(
        <Box m={4} as="table" width="550px" textAlign= "center">
        <Box as="tbody" >
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </Box>

        <Box as="tbody" >
        { props.map(({id,type,amount,currency})=>
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
        )}
        </Box>
        </Box>
    )
}