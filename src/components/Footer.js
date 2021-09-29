import Link from 'next/link'

export default function Footer() {
    return (
        <div className="bg-purple-600">
            <div className="flex flex-col items-center">
                <div className="sm:w-2/3 text-center py-6">
                    <a href="#" className="text-sm text-white font-bold mb-2">
                        <Link href="/sobre">
                            © 2021 by Yan David
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    )
}