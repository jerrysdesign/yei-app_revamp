import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type WalletSidebarProps = {
    visible: boolean;
    onClose: () => void;
};

const WalletSidebar = ({ visible, onClose }: WalletSidebarProps) => {

    return (
        <Transition show={visible} as={Fragment}>
            <Dialog
                className="fixed inset-0 z-50 flex p-4 overflow-auto scroll-smooth md:p-0"
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-n-7/90"
                        aria-hidden="true"
                    />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="linear duration-300"
                    enterFrom="opacity-0 -translate-x-[5%]"
                    enterTo="opacity-100 translate-x-0"
                    leave="linear duration-200"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-[5%]"
                >
                    <Dialog.Panel className="relative z-10 shrink-0 flex flex-col w-[25rem] min-h-full m-auto mr-0 -translate-x-[5%] bg-n-1 rounded-xl md:w-full md:rounded-none md:min-h-screen-ios dark:bg-n-6">
                        <div className="flex px-6 py-4 justify-between border-b border-n-2 dark:border-n-5">
                            <div className="flex space-x-3">
                                <div className="w-6">
                                    <Image
                                        className="w-full mr-3"
                                        src="/images/icons/wallet/metamask.svg"
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <span className="text-body-2">0xf42fd...1b6a</span>
                                <button>
                                    <Icon
                                        className="fill-n-7 transition-colors group-hover:!fill-primary-4 dark:fill-n-3"
                                        name="copy"
                                    />
                                </button>
                            </div>
                            <div className="flex space-x-3">
                                <button>
                                    <Icon
                                        className="fill-n-7 transition-colors group-hover:!fill-primary-4 dark:fill-n-3"
                                        name="gear"
                                    />
                                </button>
                                <button onClick={onClose}>
                                    <Icon
                                        className="fill-n-7 transition-colors group-hover:!fill-primary-4 dark:fill-n-3"
                                        name="close"
                                    />
                                </button>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default WalletSidebar;
