
import PropTypes from 'prop-types'

function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo

  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-800'>
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
                <a href={html_url} >
                    <h2 className="inline mr-1 text-white">{name}</h2>
                </a>
            </h3>
            <p className='mb-3'>{description}</p>
            <div>
                <div className="mr-2 badge badge-info badge-lg">
                    <h2 className='mr-2'> Watchers Count: {watchers_count}</h2>
                </div>
                <div className="mr-2 badge badge-success badge-lg">
                    <h2 className='mr-2'>Stargazers: {stargazers_count}</h2>
                </div>
                <div className="mr-2 badge badge-error badge-lg">
                    <h2 className='mr-2'>Open Issues: {open_issues}</h2>
                </div>
                <div className="mr-2 badge badge-warning badge-lg">
                    <h2 className='mr-2'>Forks: {forks}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem