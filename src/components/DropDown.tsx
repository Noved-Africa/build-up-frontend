import { Menu } from '@headlessui/react'

function DropDown() {
  return (
    <Menu>
      <Menu.Button className='mt-10 ml-5 pl-3 pr-5 border-b-2 border-green-600 xxsm:bg-green-600 xxsm:rounded-md xxsm:mt-5 xxsm:-ml-10 '>All Videos </Menu.Button>
      <Menu.Items className='-px-10'>
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