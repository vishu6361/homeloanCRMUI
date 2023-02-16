

const PrimaryButton = (props) => {
    <input type={props.type} value={props.children}
        className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
    />
}

export default PrimaryButton