const Icon = ({name}) => {
  const w3 = "http://www.w3.org/2000/svg"

  const classes = {
    cleanCode: "bi bi-clean-code",
    fastDelivery: "bi bi-fast-delivery",
    communication: "bi bi-communication",
    list: "bi bi-list",
    xLg: "bi bi-x-lg",
    address: "bi bi-address",
    email: "bi bi-email",
    whatsapp: "bi bi-whatsapp"
  }

  const icons = {
    cleanCode: <path d="m5.8604 1.4874a0.13307 0.13307 0 0 1 0.25264 0l0.23731 0.71256c0.10609 0.31765 0.35505 0.56661 0.6727 0.6727l0.71256 0.23731a0.13307 0.13307 0 0 1 0 0.25264l-0.71256 0.23731a1.0633 1.0633 0 0 0-0.6727 0.6727l-0.23731 0.71256a0.13307 0.13307 0 0 1-0.25264 0l-0.23731-0.71256a1.0633 1.0633 0 0 0-0.6727-0.6727l-0.71256-0.23731a0.13307 0.13307 0 0 1 0-0.25264l0.71256-0.23731a1.0633 1.0633 0 0 0 0.6727-0.6727zm7.0168-0.5683a0.09274 0.09274 0 0 1 0.17525 0l0.16501 0.49504c0.07355 0.2213 0.24688 0.39463 0.46818 0.46818l0.49504 0.16501a0.09274 0.09274 0 0 1 0 0.17525l-0.49504 0.16501a0.73936 0.73936 0 0 0-0.46818 0.46818l-0.16501 0.49504a0.09274 0.09274 0 0 1-0.17525 0l-0.16501-0.49504a0.73936 0.73936 0 0 0-0.46818-0.46818l-0.4944-0.16501a0.09274 0.09274 0 0 1 0-0.17525l0.49504-0.16501c0.2213-0.073553 0.39463-0.24688 0.46818-0.46818l0.16437-0.4944zm-2.7572 2.8004a0.42784 0.42784 0 1 0-0.81787-0.25152l-3.422 11.122a0.42784 0.42784 0 0 0 0.81787 0.25152zm-4.8114 2.1379a0.42776 0.42776 0 0 1 0 0.6057l-2.6923 2.6914 2.6923 2.6914a0.4283 0.4283 0 0 1-0.6057 0.6057l-2.9943-2.9943a0.42776 0.42776 0 0 1 0-0.6057l2.9943-2.9943a0.42776 0.42776 0 0 1 0.6057 0zm5.3829 0a0.42776 0.42776 0 0 0 0 0.6057l2.6923 2.6914-2.6923 2.6914a0.4283 0.4283 0 0 0 0.6057 0.6057l2.9943-2.9943a0.42776 0.42776 0 0 0 0-0.6057l-2.9943-2.9943a0.42776 0.42776 0 0 0-0.6057 0z"/>,
    fastDelivery: <path d="m11.609 1a0.30003 0.30003 0 0 0-0.25391 0.45898l1.3477 2.1426a0.30003 0.30003 0 0 0 0.50781 0l1.3477-2.1426a0.30003 0.30003 0 0 0-0.25391-0.45898zm0.54297 0.59961h1.6094l-0.80469 1.2793zm-4.6191 0.2793a0.30003 0.30003 0 0 0-0.22852 0.00195l-6.625 2.8477a0.3 0.3 0 0 0-0.15625 0.39453 0.3 0.3 0 0 0 0.39453 0.15625l5.9551-2.5605-0.88477 2.1953a0.30003 0.30003 0 0 0 0.39844 0.38867l5.9043-2.5391a0.3 0.3 0 0 0 0.15625-0.39258 0.3 0.3 0 0 0-0.39453-0.1582l-5.2344 2.25 0.88281-2.1934a0.30003 0.30003 0 0 0-0.16797-0.39063zm4.75 3.0215a0.30013 0.30013 0 0 0-0.29883 0.29883v9.2012h0.59961v-8.9004h1.2832v8.9004h0.60156v-9.2012a0.30013 0.30013 0 0 0-0.30078-0.29883zm-3.4824 1.5a0.30013 0.30013 0 0 0-0.30078 0.29883v7.7012h0.59961v-7.4004h1.2852v7.4004h0.59961v-7.7012a0.30013 0.30013 0 0 0-0.30078-0.29883zm-3.4844 1.5a0.30013 0.30013 0 0 0-0.30078 0.29883v6.2012h0.60156v-5.9004h1.2832v5.9004h0.59961v-6.2012a0.30013 0.30013 0 0 0-0.30078-0.29883zm-3.4844 1.5a0.30013 0.30013 0 0 0-0.30078 0.29883v4.7012h0.60156v-4.4004h1.2832v4.4004h0.59961v-4.7012a0.30013 0.30013 0 0 0-0.29883-0.29883zm-0.83203 5a0.3 0.3 0 0 0-0.30078 0.29883 0.3 0.3 0 0 0 0.30078 0.30078h14a0.3 0.3 0 0 0 0.30078-0.30078 0.3 0.3 0 0 0-0.30078-0.29883z"/>,
    communication: <path d="m14.896 4.8188c0 1.7969-1.6649 3.2536-3.7184 3.2536a4.2111 4.2111 0 0 1-1.0909-0.14223c-0.27144 0.13758-0.89474 0.40159-1.9433 0.57356-0.09296 0.014874-0.16361-0.081805-0.12689-0.16826 0.16454-0.38857 0.31328-0.90636 0.3579-1.3786-0.56938-0.5717-0.91519-1.32-0.91519-2.1381 0-1.7969 1.6649-3.2536 3.7184-3.2536 2.0535 0 3.7184 1.4567 3.7184 3.2536zm-5.3452-1.3944a0.2324 0.2324 0 0 0 0 0.4648h3.2536a0.2324 0.2324 0 0 0 0-0.4648zm0 1.162a0.2324 0.2324 0 0 0 0 0.4648h3.2536a0.2324 0.2324 0 0 0 0-0.4648zm0 1.162a0.2324 0.2324 0 0 0 0 0.4648h1.8592a0.2324 0.2324 0 0 0 0-0.4648zm-7.8622 8.6864s-0.58534 0-0.58534-0.58534 0.58534-2.3414 3.512-2.3414 3.512 1.756 3.512 2.3414-0.58534 0.58534-0.58534 0.58534zm2.9267-3.512a1.756 1.756 0 1 0 0-3.512 1.756 1.756 0 0 0 0 3.512z"/>,
    list: <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>,
    xLg: <>
      <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
      <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </>,
    address: <>
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </>,
    email: <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>,
    whatsapp: <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
  }

  return (
    <svg className={classes[name]} width="16" height="16" fill="#fff" viewBox="0 0 16 16" xmlns={w3}>
      {icons[name]}
    </svg>
  )
}

export default Icon