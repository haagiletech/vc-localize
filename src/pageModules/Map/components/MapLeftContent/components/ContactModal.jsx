import React from 'react';
import { Modal, PageHeader } from 'antd';
import MockAvatar from '@/static/web_images/avatar.png';

import styles from '../index.less';

const ContactModal = ({ visible, onClose, contactName, contactMobile, contactEmail }) => {
  return (
    <>
      <Modal
        className={styles.customContact_Modal}
        visible={visible}
        footer={null}
        closable={false}
      >
        <PageHeader
          className={styles.customContact_PageHeader}
          onBack={onClose}
          title="Liên hệ môi giới/ chính chủ"
        />
        <h2 className={styles.title}>Liên hệ môi giới/ chính chủ</h2>
        <div className={styles.contactInfor}>
          <div className={`${styles.name} flex items-center mb-4`}>
            <div className={`${styles.icon} mr-4`}>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.125 8.98926H14.25C14.3495 8.98926 14.4448 8.94975 14.5152 8.87942C14.5855 8.8091 14.625 8.71371 14.625 8.61426C14.625 8.5148 14.5855 8.41942 14.5152 8.34909C14.4448 8.27877 14.3495 8.23926 14.25 8.23926H13.125C13.0255 8.23926 12.9302 8.27877 12.8598 8.34909C12.7895 8.41942 12.75 8.5148 12.75 8.61426C12.75 8.71371 12.7895 8.8091 12.8598 8.87942C12.9302 8.94975 13.0255 8.98926 13.125 8.98926Z"
                  fill="#00AEAC"
                />
                <path
                  d="M13.5938 10.3018C13.8526 10.3018 14.0625 10.0919 14.0625 9.83301C14.0625 9.57412 13.8526 9.36426 13.5938 9.36426C13.3349 9.36426 13.125 9.57412 13.125 9.83301C13.125 10.0919 13.3349 10.3018 13.5938 10.3018Z"
                  fill="#00AEAC"
                />
                <path
                  d="M11.25 8.61426C11.25 8.5148 11.2105 8.41942 11.1402 8.34909C11.0698 8.27877 10.9745 8.23926 10.875 8.23926H9.75C9.65054 8.23926 9.55516 8.27877 9.48483 8.34909C9.41451 8.41942 9.375 8.5148 9.375 8.61426C9.375 8.71371 9.41451 8.8091 9.48483 8.87942C9.55516 8.94975 9.65054 8.98926 9.75 8.98926H10.875C10.9745 8.98926 11.0698 8.94975 11.1402 8.87942C11.2105 8.8091 11.25 8.71371 11.25 8.61426Z"
                  fill="#00AEAC"
                />
                <path
                  d="M10.4062 10.3018C10.6651 10.3018 10.875 10.0919 10.875 9.83301C10.875 9.57412 10.6651 9.36426 10.4062 9.36426C10.1474 9.36426 9.9375 9.57412 9.9375 9.83301C9.9375 10.0919 10.1474 10.3018 10.4062 10.3018Z"
                  fill="#00AEAC"
                />
                <path
                  d="M12.75 12.7393H11.25C11.1505 12.7393 11.0552 12.7788 10.9848 12.8491C10.9145 12.9194 10.875 13.0148 10.875 13.1143C10.875 13.2137 10.9145 13.3091 10.9848 13.3794C11.0552 13.4497 11.1505 13.4893 11.25 13.4893H12.75C12.8495 13.4893 12.9448 13.4497 13.0152 13.3794C13.0855 13.3091 13.125 13.2137 13.125 13.1143C13.125 13.0148 13.0855 12.9194 13.0152 12.8491C12.9448 12.7788 12.8495 12.7393 12.75 12.7393Z"
                  fill="#00AEAC"
                />
                <path
                  d="M3.02533 19.62C2.56449 19.8505 2.16639 20.1892 1.8651 20.6072C1.56381 21.0252 1.36831 21.51 1.29536 22.02L1.12877 23.1864C1.12117 23.2396 1.12509 23.2938 1.14027 23.3454C1.15544 23.3969 1.18151 23.4446 1.21672 23.4852C1.25192 23.5257 1.29543 23.5583 1.34431 23.5806C1.39319 23.6029 1.44629 23.6144 1.50002 23.6144H22.5C22.5537 23.6144 22.6068 23.6029 22.6557 23.5806C22.7046 23.5583 22.7481 23.5257 22.7833 23.4852C22.8185 23.4446 22.8446 23.3969 22.8598 23.3454C22.8749 23.2938 22.8789 23.2396 22.8713 23.1864L22.7047 22.0202C22.6317 21.5101 22.4362 21.0253 22.1349 20.6074C21.8336 20.1894 21.4355 19.8506 20.9747 19.6202L14.25 16.2577V15.3551C14.7785 14.9494 15.1876 14.4085 15.4338 13.7894C15.7141 13.0899 15.9113 12.3599 16.0213 11.6144H16.2683C16.5204 11.6153 16.7678 11.5455 16.9822 11.4129C17.1967 11.2804 17.3698 11.0904 17.4818 10.8644C17.5757 10.676 17.6248 10.4683 17.625 10.2577V9.5962C17.6252 9.24595 17.4893 8.90932 17.2462 8.65724L17.4424 7.87752C17.6249 7.15046 17.6304 6.39022 17.4584 5.66058C17.2864 4.93095 16.942 4.25321 16.4539 3.68423C15.9504 3.01641 15.264 2.50899 14.4778 2.2235C13.6917 1.93801 12.8397 1.88671 12.025 2.07581C11.7765 2.13379 11.5286 2.1914 11.2923 2.24629C10.7656 2.36777 10.2697 2.5967 9.83553 2.91873C9.4014 3.24076 9.03845 3.64897 8.76939 4.11777C8.4148 4.13715 8.06872 4.23372 7.75532 4.40074C7.44193 4.56776 7.1688 4.80121 6.955 5.08476C6.76309 5.3392 6.62356 5.62918 6.54446 5.9379C6.46537 6.24663 6.44829 6.56798 6.49422 6.88335L6.74842 8.66282C6.50857 8.91436 6.37484 9.24863 6.37502 9.5962V10.2577C6.37527 10.4683 6.42431 10.676 6.51827 10.8644C6.63026 11.0904 6.80331 11.2804 7.01779 11.4129C7.23228 11.5455 7.47962 11.6153 7.73177 11.6144H7.9787C8.08876 12.3599 8.28594 13.0899 8.56619 13.7894C8.81246 14.4085 9.2215 14.9494 9.75002 15.3551V16.2577L3.02533 19.62ZM4.12502 22.8644V21.7394C4.12502 21.64 4.08551 21.5446 4.01518 21.4743C3.94486 21.404 3.84947 21.3644 3.75002 21.3644C3.65056 21.3644 3.55518 21.404 3.48485 21.4743C3.41453 21.5446 3.37502 21.64 3.37502 21.7394V22.8644H1.93239L2.03786 22.1263C2.09368 21.7362 2.24321 21.3655 2.47364 21.0459C2.70406 20.7263 3.00853 20.4672 3.36095 20.291L8.55124 17.6959L6.84499 19.6155C6.80119 19.6647 6.77116 19.7247 6.7579 19.7892C6.74464 19.8538 6.74863 19.9207 6.76947 19.9832L7.7297 22.8644H4.12502ZM9.37502 19.1144V22.8644H8.5203L7.54933 19.9515L9.37502 17.8977V19.1144ZM20.6391 20.291C20.9915 20.4673 21.2959 20.7263 21.5263 21.046C21.7567 21.3656 21.9062 21.7364 21.962 22.1264L22.0676 22.8644H20.625V21.7394C20.625 21.64 20.5855 21.5446 20.5152 21.4743C20.4449 21.404 20.3495 21.3644 20.25 21.3644C20.1506 21.3644 20.0552 21.404 19.9849 21.4743C19.9145 21.5446 19.875 21.64 19.875 21.7394V22.8644H16.2703L17.2308 19.983C17.2516 19.9205 17.2556 19.8536 17.2424 19.789C17.2291 19.7245 17.1991 19.6646 17.1553 19.6153L15.449 17.6957L20.6391 20.291ZM14.625 19.1144V17.8977L16.4507 19.9515L15.4797 22.8644H14.625V19.1144ZM10.5394 22.8644H10.125V19.3462L10.6024 19.1075L10.8682 19.9049L10.5394 22.8644ZM11.3081 17.9161L10.125 18.5077V17.6754L10.3107 17.1184L11.3081 17.9161ZM10.5 16.3092V15.7997C10.9728 16.0073 11.4836 16.1145 12 16.1145C12.5164 16.1145 13.0272 16.0073 13.5 15.7997V16.3092L12 17.5092L10.5 16.3092ZM11.294 22.8644L11.5856 20.2394H12.4144L12.706 22.8644H11.294ZM12.4799 19.4894H11.5203L11.2801 18.7687L12 18.4087L12.72 18.7687L12.4799 19.4894ZM13.875 22.8644H13.4606L13.1318 19.9049L13.3976 19.1075L13.875 19.3462V22.8644ZM13.875 18.5077L12.6919 17.9161L13.6893 17.1183L13.875 17.6754V18.5077ZM16.875 10.2577C16.8749 10.3519 16.853 10.4448 16.811 10.5291C16.7609 10.6301 16.6835 10.715 16.5876 10.7743C16.4916 10.8336 16.381 10.8648 16.2683 10.8644H16.1022C16.1172 10.6442 16.1248 10.4229 16.125 10.2006V8.98945H16.2683C16.4291 8.98963 16.5834 9.05362 16.6971 9.16737C16.8108 9.28111 16.8748 9.43533 16.875 9.5962V10.2577ZM7.73177 10.8644C7.61901 10.8648 7.50839 10.8336 7.41247 10.7743C7.31655 10.715 7.23915 10.6301 7.18905 10.5291C7.14706 10.4448 7.12514 10.3519 7.12502 10.2577V9.5962C7.1252 9.43533 7.18919 9.28111 7.30293 9.16737C7.41668 9.05362 7.5709 8.98963 7.73177 8.98945H7.87502V10.2006C7.87502 10.4228 7.88263 10.6441 7.89784 10.8644H7.73177ZM7.92691 7.29904C7.89295 7.35675 7.87504 7.42249 7.87502 7.48945V8.23945H7.73177C7.637 8.23946 7.5425 8.24941 7.44981 8.26912L7.23672 6.77737C7.20496 6.5595 7.21674 6.3375 7.27138 6.12422C7.32601 5.91094 7.42241 5.71062 7.555 5.53485C7.71153 5.3272 7.91403 5.15861 8.14662 5.04232C8.37922 4.92602 8.63558 4.86517 8.89563 4.86454H8.99533C9.06497 4.86455 9.13324 4.84516 9.19249 4.80855C9.25174 4.77194 9.29962 4.71955 9.33077 4.65726C9.54002 4.23727 9.83961 3.86879 10.2081 3.57825C10.5765 3.28771 11.0047 3.08232 11.4619 2.97679C11.6985 2.9219 11.9463 2.86429 12.1952 2.80626C12.8702 2.64968 13.5763 2.69283 14.2273 2.93045C14.8783 3.16807 15.4461 3.5899 15.8616 4.14454C15.8668 4.15143 15.8722 4.15809 15.8778 4.1646C16.2902 4.64273 16.5815 5.21303 16.7272 5.82738C16.873 6.44173 16.8688 7.08212 16.7151 7.69452L16.5694 8.27357C16.4706 8.25097 16.3696 8.23952 16.2683 8.23945H16.125V7.48945C16.125 7.38999 16.0855 7.29461 16.0152 7.22428C15.9449 7.15395 15.8495 7.11445 15.75 7.11445H13.926C13.1287 7.11244 12.3398 6.95263 11.6046 6.64421C10.8695 6.3358 10.2026 5.88489 9.64258 5.31749C9.60227 5.27645 9.55307 5.24523 9.49877 5.22624C9.44447 5.20726 9.38653 5.20102 9.32943 5.20802C9.27233 5.21501 9.21761 5.23504 9.1695 5.26657C9.12138 5.29809 9.08116 5.34027 9.05195 5.38982L7.92691 7.29904ZM9.26252 13.5111C8.84045 12.4585 8.62405 11.3347 8.62502 10.2006V7.59173L9.45939 6.1761C10.6952 7.26035 12.282 7.86014 13.926 7.86445H15.375V10.2006C15.376 11.3347 15.1596 12.4585 14.7375 13.5111C14.5186 14.0582 14.1409 14.5272 13.6529 14.8575C13.165 15.1878 12.5893 15.3644 12 15.3644C11.4108 15.3644 10.835 15.1878 10.3471 14.8575C9.85916 14.5272 9.48138 14.0582 9.26252 13.5111Z"
                  fill="#00AEAC"
                />
                <path
                  d="M11.25 11.6143C11.25 11.7137 11.2895 11.8091 11.3598 11.8794C11.4302 11.9497 11.5255 11.9893 11.625 11.9893H12.375C12.4745 11.9893 12.5698 11.9497 12.6402 11.8794C12.7105 11.8091 12.75 11.7137 12.75 11.6143C12.75 11.5148 12.7105 11.4194 12.6402 11.3491C12.5698 11.2788 12.4745 11.2393 12.375 11.2393H12V10.4893C12 10.3898 11.9605 10.2944 11.8902 10.2241C11.8198 10.1538 11.7245 10.1143 11.625 10.1143C11.5255 10.1143 11.4302 10.1538 11.3598 10.2241C11.2895 10.2944 11.25 10.3898 11.25 10.4893V11.6143Z"
                  fill="#00AEAC"
                />
              </svg>
            </div>
            <span className={styles.nameSpan}>{contactName}</span>
          </div>
          <div className={`${styles.email} flex items-center mb-4`}>
            <div className={`${styles.icon} mr-4`}>
              <svg
                width={24}
                height={18}
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1.86426L12 9.36426L22.5 1.86426M1.5 16.8643H22.5V1.86426H1.5V16.8643Z"
                  stroke="#00AEAC"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>{contactEmail}</span>
          </div>
          <div className={`${styles.phone} flex items-center`}>
            <div className={`${styles.icon} mr-4`}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0002 11.3633H22.0002C22.0002 6.23326 18.1272 2.36426 12.9902 2.36426V4.36426C17.0522 4.36426 20.0002 7.30726 20.0002 11.3633Z"
                  fill="#00AEAC"
                />
                <path
                  d="M13.0003 8.3645C15.1033 8.3645 16.0003 9.2615 16.0003 11.3645H18.0003C18.0003 8.1395 16.2253 6.3645 13.0003 6.3645V8.3645ZM16.4223 13.8075C16.2301 13.6328 15.9776 13.5397 15.7181 13.5477C15.4585 13.5558 15.2123 13.6643 15.0313 13.8505L12.6383 16.3115C12.0623 16.2015 10.9043 15.8405 9.71228 14.6515C8.52028 13.4585 8.15928 12.2975 8.05228 11.7255L10.5113 9.3315C10.6977 9.15062 10.8064 8.90432 10.8144 8.6447C10.8225 8.38509 10.7292 8.13254 10.5543 7.9405L6.85928 3.8775C6.68432 3.68485 6.44116 3.568 6.18143 3.55176C5.92171 3.53551 5.66588 3.62116 5.46828 3.7905L3.29828 5.6515C3.12539 5.82501 3.0222 6.05595 3.00828 6.3005C2.99328 6.5505 2.70728 12.4725 7.29928 17.0665C11.3053 21.0715 16.3233 21.3645 17.7053 21.3645C17.9073 21.3645 18.0313 21.3585 18.0643 21.3565C18.3088 21.3428 18.5396 21.2392 18.7123 21.0655L20.5723 18.8945C20.7417 18.697 20.8276 18.4413 20.8115 18.1815C20.7954 17.9218 20.6788 17.6786 20.4863 17.5035L16.4223 13.8075Z"
                  fill="#00AEAC"
                />
              </svg>
            </div>
            <span className={styles.emailSpan}>{contactMobile}</span>
          </div>
        </div>
        <div className={styles.close} onClick={onClose}>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.39705 0.553791L0.46967 0.46967C0.73594 0.2034 1.1526 0.1792 1.44621 0.39705L1.53033 0.46967L8 6.939L14.4697 0.46967C14.7626 0.17678 15.2374 0.17678 15.5303 0.46967C15.8232 0.76256 15.8232 1.23744 15.5303 1.53033L9.061 8L15.5303 14.4697C15.7966 14.7359 15.8208 15.1526 15.6029 15.4462L15.5303 15.5303C15.2641 15.7966 14.8474 15.8208 14.5538 15.6029L14.4697 15.5303L8 9.061L1.53033 15.5303C1.23744 15.8232 0.76256 15.8232 0.46967 15.5303C0.17678 15.2374 0.17678 14.7626 0.46967 14.4697L6.939 8L0.46967 1.53033C0.2034 1.26406 0.1792 0.847401 0.39705 0.553791L0.46967 0.46967L0.39705 0.553791Z"
              fill="#727C7D"
            />
          </svg>
        </div>
      </Modal>
    </>
  );
};

export default ContactModal;