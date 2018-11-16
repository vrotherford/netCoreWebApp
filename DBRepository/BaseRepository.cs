using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; }
        protected IBasicContextFactrory ConextFactrory { get; }
        public BaseRepository(string connectionString, IBasicContextFactrory basicConextFactrory)
        {
            ConnectionString = connectionString;
            ConextFactrory = basicConextFactrory;
        }
    }
}
