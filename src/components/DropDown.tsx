import { Menu } from '@headlessui/react'

function DropDown() {
  return (
    <Menu>
      <Menu.Button className='mt-10 w-40 h-9 lg:pr-8 border-b-2 border-green-600 bg-white xxsm:mt-5 text-green-600 lg:-ml-5 sm:-pl-10 sm:-ml-10'>All Videos</Menu.Button>
      <Menu.Items className='-ml-10 bg-white sm:-mt-1 sm:pt-7 mt-3 lg:border-r-2'>
        <Menu.Item>
          <><a href='events'>Events</a><br /></>
        </Menu.Item>
        <Menu.Item>
          <><a href='events'>Community</a><br /></>
        </Menu.Item>
        <Menu.Item>
          <><a href='events'>Hangouts</a><br /></>
        </Menu.Item>
        
      </Menu.Items>
    </Menu>
  )
}

export default DropDown