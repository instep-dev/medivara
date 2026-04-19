import Image from 'next/image'
import { teamImages } from '@/data/data'

type Member = { name: string; role: string }
type TeamsDict = { members: Member[] }

export default function TeamsSection({ dict }: { dict: TeamsDict }) {
  const members = teamImages.map((image, i) => ({
    image,
    name: dict.members[i]?.name ?? '',
    role: dict.members[i]?.role ?? '',
  }))

  const row1 = members.slice(0, 4)
  const row2 = members.slice(4, 7)

  return (
    <section id="teams" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-center gap-12">
          {row1.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="relative w-64 h-50 shadow-xl rounded-md overflow-hidden mb-3 ring-2 ring-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-teal font-semibold text-xl mt-3 text-center leading-tight">
                {member.name}
              </h3>
              <p className="text-gray-500 text-center w-52 text-xs mt-1 leading-tight">
                {member.role}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-12 mt-12">
          {row2.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="relative w-64 h-50 shadow-xl rounded-md overflow-hidden mb-3 ring-2 ring-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-teal font-semibold text-xl mt-3 text-center leading-tight">
                {member.name}
              </h3>
              <p className="text-gray-500 text-center w-46 text-xs mt-1 leading-tight">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
