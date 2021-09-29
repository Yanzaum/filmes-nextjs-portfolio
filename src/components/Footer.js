import Link from 'next/link'

export default function Footer() {
    return (
        <div class="bg-purple-600">
            <div class="flex flex-col items-center">
                <div class="sm:w-2/3 text-center py-6">
                    <a href="#" class="text-sm text-white font-bold mb-2">
                        <Link href="/sobre">
                            © 2021 by Yan David
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    )
}