
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import uuid from 'react-uuid'

function RepoList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <h2 className="text-2xl my-4 font-bold card-title">
                Recent Repositories
            </h2>
            {repos.map( (repo) => (
                <RepoItem key={uuid()} repo={repo} />
            ))}
        </div>
    </div>
  )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList