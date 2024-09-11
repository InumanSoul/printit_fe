import Button from "../Button/Button"
import PageTitle from "./PageTitle"

interface PageTitleLargeProps {
  title: string;
  action: string;
  actionLabel: string;
  icon: React.ReactNode;

}

const PageTitleLarge = ({ title, action, actionLabel, icon }: PageTitleLargeProps) => {

  return(
    <div className='flex justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <div className='size-16 rounded-xl from-neutral-50 to-neutral-200 bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center'>
        {icon}
        </div>
        <PageTitle>{title}</PageTitle>
      </div>
      <Button href={action} variant='primary' className='w-fit'>
        {actionLabel}
      </Button>
    </div>
  )
}

export default PageTitleLarge;