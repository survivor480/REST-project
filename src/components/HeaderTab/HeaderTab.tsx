import DemoTabs from './DemoTabs';


export default function HeaderTab() {
    // const [show, setShow] = useState(false);
    // const initialValues = {
    //     method: "",
    //     endpoint: "",
    // }

    // const validationSchema = Yup.object().shape({
    //     method: Yup.string().required('Required!'),
    // })

    // const methods = [
    //     { value: 'GET', name: 'GET', color: 'text-[#65b477]'},
    //     { value: 'POST', name: 'POST', color: 'text-[#c4c74e]' },
    //     { value: 'PATCH', name: 'PATCH', color: 'text-[#ffa24e]' },
    //     { value: 'PUT', name: 'PUT', color: 'text-[#f09a4c]' },
    //     { value: 'DELETE', name: 'DELETE', color: 'text-[#f7645a]' },
    //     { value: 'HEAD', name: 'HEAD', color: 'text-[#65b477]' },
    //     { value: 'OPTIONS', name: 'Options', color: 'text-[#87adc4]' },
    //     { value: 'Custom', name: 'Custom', color: 'text-[#a3a29f]'}
    // ]

    return (
        <div className='mt-2 px-4'>
            {/* <NewTabs index={0} value={0} /> */}
            <DemoTabs />
            
        </div>
    )
}
